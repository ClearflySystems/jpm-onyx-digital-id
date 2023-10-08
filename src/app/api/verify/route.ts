import { NextResponse} from "next/server";

import {VerifierService} from "@/app/services/verifierService";

/**
 * Take a submitted VerifiedPresentation request and test if valid
 * @param request
 * @constructor
 */
export async function POST(request: Request) {

  const { presentation } = await request.json();
  const verificationService = new VerifierService();

  console.log(presentation);

  try {
    return NextResponse.json(await verificationService.verify(presentation));
  } catch (e: any) {
    return NextResponse.json({
      status: "invalid",
      errors: [
        {
          message: e.message
        }
      ]
    })
  }

}