export interface File {
    data: any;
    progress: number;
    inProgress: boolean;
  }

  export class Vue{
    el: any;
    data: {
     title: any;
     name: any;
     text: any;
     messages:any [];
     socket: any;
    }
    methods


    constructor(obj: any = null)
    {
      if(obj != null)
      {
        Object.assign(this, obj);
      }
    }
  }