export class Score {
    
    id:number

    game_name:string

    user_score:number

    constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}

}
export class Game {
    
    id:number

    name:string

    description:number

    constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}

}
