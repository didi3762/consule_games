import { Score } from './game';

export class UserInfoModel {
    guid: string;
	customerUid: string;
	
	first_name: string;
	last_name: string;

	email: string;
	zipcode: string;

	password: string;
	pothoUrl:string;
	scores:Score[]
		sum_score;
	

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}
