import {
  verifyPresentationJWT,
  verifyCredentialJWT,
  getIssuerFromVC,
  verifyDIDs,
  EthrDIDMethod,
  getSupportedResolvers,
  getCredentialsFromVP
} from '@jpmorganchase/onyx-ssi-sdk'
import "@ethersproject/shims"

class VerifierService {

  public async verify(vp: string) {
    console.log('Verifying Presentation JWT');

    const ethrProvider = {
      name: process.env.CHAIN_NAME! as string,
      chainId: process.env.CHAIN_ID,
      rpcUrl: process.env.WEB3_URL!,
      registry: process.env.REGISTRY_ADDRESS!,
      gasSource: ""
    };


    let result = true
    const ethrDID = new EthrDIDMethod(ethrProvider);
    const didResolver = getSupportedResolvers([ethrDID])

    console.log(`DID Resolver: ${didResolver}`);

    // verification of presentation JWT (checks signature, dates, format)
    const isVpJwtValid = await verifyPresentationJWT(
      vp,
      didResolver,
      {policies: {issuanceDate: true, expirationDate: true, format: true}}
    );

    console.log(`Is Valid JWT: ${isVpJwtValid}`);

    if (isVpJwtValid) {
      //verify all credentials within presenation
      const vcJwt = getCredentialsFromVP(vp);
      console.log(`Verifying ${vcJwt.length} Credentials`)

      for (var vc of vcJwt) {
        try {
          await this.verifyVC(vc, didResolver)
        } catch (e: any) {
          console.log(e.message)
          return false
        }
      }
    } else {
      return false
    }

    return result;
  }

  private async verifyVC(vc: any, didResolver: any) {
    //verification of credential JWT (checks signature, dates, format)
    const isVCJwtValid = await verifyCredentialJWT(vc, didResolver,
      {policies: {issuanceDate: true, expirationDate: true, format: true}})

    //verification of credential subject and issuer DIDS
    const vcDidsVerified = await verifyDIDs(vc, didResolver);

    //verify that VC issuer is trusted
    const vcIssuerDid = getIssuerFromVC(vc) === process.env.TRUSTED_ISSUER

    if (!isVCJwtValid) {
      throw new Error(`VC JWT is invalid: ${vc}`)
    }
    if (!vcDidsVerified) {
      throw new Error(`VC DIDs are invalid: ${vc}`)
    }

    if (!vcIssuerDid) {
      throw new Error(`VC Issuer not trusted: ${vc}`)
    }
  }
}

export {
  VerifierService
}
