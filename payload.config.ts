import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import { Page } from './collections/page';
import { Media } from './collections/media';
import { FormSubmission } from './collections/form-submission';
import { MainMenu } from './globals/main-menu';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Page, Media, FormSubmission],
  globals: [MainMenu],
});
