import { NextResponse} from "next/server";

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {cookies} from "next/headers";
import {isAuthed} from "@/app/components/auth";

/**
 * Take a submitted VerifiedPresentation request and test if valid
 * @param request
 * @constructor
 */
export async function POST(request: Request) {

  let authorized = await isAuthed();
  if(authorized){
    cookies().set('authorized', '1', {
      expires: Date.now() + (3600 * 1000),
      path: '/'
    });
  }

  try {
    return NextResponse.json({
      status: "OK"
    });
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