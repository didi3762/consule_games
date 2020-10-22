export class UserInfoModel {
    guid: string;
	customerUid: string;
	
	first_name: string;
	last_name: string;

	email: string;
	zipcode: string;

	password: string;
	pothoUrl:string;
		sudoko_score;
		trivya_score;
		currenr_score;
		sum_score;
	

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}
