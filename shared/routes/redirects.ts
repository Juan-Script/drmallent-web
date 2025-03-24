import { redirectsData } from "../routes/redirectsData";

export type Redirection = {
    source: string, 
    destination: string,
    statusCode: number;
}

export const shouldRedirect = (path: any): Redirection | any => {
  let redirect: any = null;

  redirectsData.forEach((redirection: Redirection) => {

    if(path === redirection.source) {
      
      redirect = {
        destination: redirection?.destination,
        permanent: true
      };
    }
  })

  return redirect ? redirect : false
}