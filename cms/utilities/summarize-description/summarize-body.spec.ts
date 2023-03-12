import { MetaDescription } from '../../fields/meta-description/model';

describe('MetaDescription', () => {
  describe('formatErrorMessage', () => {
    it('should prepend "Error:" to the given error string', () => {
      const error = 'Some error';
      const formattedError = MetaDescription.formatErrorMessage(error);

      expect(formattedError).toEqual('Error: Some error');
    });
  });

  describe('isErrorMessage', () => {
    it('should return false when the description is empty', () => {
      const description = new MetaDescription('');
      expect(description.isErrorMessage()).toBe(false);
    });

    it('should return true when the description starts with "Error:"', () => {
      const description = new MetaDescription('Error: some error message');
      expect(description.isErrorMessage()).toBe(true);
    });

    it('should return false when the description does not start with "Error:"', () => {
      const description = new MetaDescription('This is a normal description');
      expect(description.isErrorMessage()).toBe(false);
    });
  });

  describe('normalize', () => {
    it('should remove all line breaks and trim the description', () => {
      const description = new MetaDescription(
        '   \n This is a description. \n   '
      );
      const normalized = description.normalize();

      expect(normalized).toEqual('This is a description.');
    });
  });

  describe('isValid', () => {
    it('should return false when the description is empty', () => {
      const description = new MetaDescription('');
      expect(description.isValid()).toBe(false);
    });

    it('should return false when the description starts with "Error:"', () => {
      const description = new MetaDescription('Error: some error message');
      expect(description.isValid()).toBe(false);
    });

    it('should return true when the description does not start with "Error:"', () => {
      const description = new MetaDescription('This is a normal description');
      expect(description.isValid()).toBe(true);
    });
  });
});
