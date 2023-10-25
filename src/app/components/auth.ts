import { headers, cookies } from 'next/headers'
import { VerifierService } from "@/app/services/verifierService";

//export const revalidate = 0

export const isAuthed = async () => {
    // check and verify auth header if passed
  const headersList = headers();
  //console.log(headersList);
  const auth_header = headersList.get('Authentication');
  console.log('Auth Component');
  if(auth_header && auth_header.startsWith('web3credential')) {
    console.log(auth_header);
    const auth = auth_header.split(' ');
    const verificationService = new VerifierService();
    const signedVpJwt = "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2cCI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVQcmVzZW50YXRpb24iXSwidmVyaWZpYWJsZUNyZWRlbnRpYWwiOlsiZXlKaGJHY2lPaUpGVXpJMU5rc2lMQ0owZVhBaU9pSktWMVFpZlEuZXlKMll5STZleUpBWTI5dWRHVjRkQ0k2V3lKb2RIUndjem92TDNkM2R5NTNNeTV2Y21jdk1qQXhPQzlqY21Wa1pXNTBhV0ZzY3k5Mk1TSmRMQ0owZVhCbElqcGJJbFpsY21sbWFXRmliR1ZEY21Wa1pXNTBhV0ZzSWl3aVFtRnNZVzVqWlVOeVpXUmxiblJwWVd3aVhTd2lZM0psWkdWdWRHbGhiRk4xWW1wbFkzUWlPbnNpYm1GdFpTSTZJazVoZEdGc2FXVWdSMkZ5WTJsaElpd2lZbUZzWVc1alpTSTZJaVEyTERBd01DSjlmU3dpYzNWaUlqb2laR2xrT21WMGFISTZiV0YwYVdOdGRXMDZNSGcxTXpCQllqbGxNVU13UW1NeE9EQkVZVEpET1VWRU1UbGlORVJqTkVWaVpFVTBOR0ptT0RBd0lpd2lhblJwSWpvaVpHbGtPbVYwYUhJNmJXRjBhV050ZFcwNk1IZzRPV0UxWWpoaE5XTkZNakF4UmpJNVpqSXdZbU0yWkRVeE5UY3dPREkzTW1RMlFVSTJOMk14SWl3aWJtSm1Jam94TmprMk16WTJPVEV5TENKcGMzTWlPaUprYVdRNlpYUm9janB0WVhScFkyMTFiVG93ZUdVMk9XUkRaamc1WmpnMU1HSTFOalpoTmpVME4yTXdOVGxrTWpNeE5XWTNZVFpsUmpBeVEyRWlmUS45YzFxOHNZUHlvaUtwQnh0d1c3ZkRvd09lbTFrbUJIWVY0d19HbzYtTHNrTHNMZWNWTTZhRkZQeUEwRHZaSUI1UDJkdXprcURYakt1R1BOUEhnVDhHUSJdfSwiaXNzIjoiZGlkOmV0aHI6bWF0aWNtdW06MHg1MzBBYjllMUMwQmMxODBEYTJDOUVEMTliNERjNEViZEU0NGJmODAwIn0.a-vUTj7mJasNIdnW9waEwtqw1pXCGKRAacub7Uc0HZvte9sM5RbxTvikiPgEwEcUmRutrjIE9XmV-AOfYJDsSA";
    console.log(signedVpJwt);
    console.log(auth[1]);
    const authorized = await verificationService.verify(signedVpJwt);
    return authorized;
  }else{
    // check for cookie
    let hascookie = cookies().get('authorized');
    return hascookie?.value === '1';
  }
}