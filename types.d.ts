type VerifiedPresentation = {
  did: string,
  jwt: string,
  signature: string
}

type VerifyResponse = {
  data: string
}