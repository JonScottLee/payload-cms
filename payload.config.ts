import { buildConfig } from 'payload/config';
import { Footer, MainMenu } from './cms/globals';
import { FormSubmission } from './cms/collections/form-submission';
import { Media } from './cms/collections/media';
import { Page } from './cms/collections/page';
import dotenv from 'dotenv';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Page, Media, FormSubmission],
  globals: [MainMenu, Footer],
});
