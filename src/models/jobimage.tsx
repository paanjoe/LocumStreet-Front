import Jobs from './jobs';

export interface JobImage {
  ID: string;
  jobID: Jobs;
  created: Date;
  updated: Date;
  imageList: [
    {
      fileName: string;
    }
  ];
}

export interface JobImageList {
  jobImageArr: JobImage[];
}
