export class User {

  name: string='Samh';
  email: string='Samh@Samh.com';
  photo_url:string='assets/logo.jpeg' ;
  role:string='';

  get isAdmin(){
    return this.role=='Admin';
  };
  get isEmployee(){
    return this.role=='Employee';
  };
}
