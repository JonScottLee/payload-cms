import { buildConfig } from 'payload/config';
import { Footer, MainMenu } from './globals';
import { FormSubmission } from './collections/form-submission';
import { Media } from './collections/media';
import { Page } from './collections/page';
import dotenv from 'dotenv';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Page, Media, FormSubmission],
  globals: [MainMenu, Footer],
});
