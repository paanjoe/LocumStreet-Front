import { Profile } from './profile';
import { JobImage } from './jobimage';

export default interface Jobs {
  ID: string;
  jobTitle: string;
  jobType: string;
  jobField: string;
  jobSalaryFigure: number;
  jobSalaryType: string;
  jobDescription: string;
  jobLocation: string;
  jobDateStart: Date;
  jobDateEnd: Date;
  jobTimeStart: Date;
  jobTimeEnd: Date;
  jobProfitSharing: number;
  jobStatus: string;
  listingStatus: boolean;
  jobOwnerID: Profile;
  jobProvince: string;
  jobDistrict: string;
  jobDatePosted: Date;
  jobImageArr: JobImage;
}

export default interface JobLists {
  jobsArr: Jobs[];
}
