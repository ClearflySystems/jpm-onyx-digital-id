import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import {VerifierService} from "@/app/services/verifierService";


// Limit the middleware to paths starting with `/login`
export const config = {
  matcher: '/login'
}

export async function middleware(request: NextRequest) {
  // check and verify auth header if passed
  const headersList = new Headers(request.headers);
  const auth_header = headersList.get('Authentication');
  console.log('Auth Middleware')
  if(auth_header && auth_header.startsWith('web3credential')){
    console.log(auth_header);
    const auth = auth_header.split(' ');
    const verificationService = new VerifierService();
    const authorized = await verificationService.verify(auth[1]);

    if (!authorized) {
      // Respond with JSON indicating an error message
      return NextResponse.json(
        { success: false, message: 'authentication failed! No cookies for you, try again!' },
        { status: 401 }
      )
    }else{
      //return NextResponse.redirect('/admin')
      return NextResponse.json(
        { success: true, message: 'You get an auth cookie, yum yum.....' },
        { status: 200 }
      )
    }
  }

}
