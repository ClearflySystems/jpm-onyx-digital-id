Example Login page allowing an example WEB3 login flow.

Middleware check's for 'authentication' header containing our presented VP, which is then verified against the registry using the example verification flow in the Onyx SSI SDK.

This is to show how an auth flow could be implemented. Once verified the user can passed a traditional Session Auth token/cookie giving them access to the rest of the site.