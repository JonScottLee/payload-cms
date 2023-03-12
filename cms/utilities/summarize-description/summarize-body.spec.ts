import { Description } from './summarize-body';

describe('Description', () => {
  describe('formatErrorMessage', () => {
    it('should prepend "Error:" to the given error string', () => {
      const error = 'Some error';
      const formattedError = Description.formatErrorMessage(error);

      expect(formattedError).toEqual('Error: Some error');
    });
  });

  describe('isErrorMessage', () => {
    it('should return false when the description is empty', () => {
      const description = new Description('');
      expect(description.isErrorMessage()).toBe(false);
    });

    it('should return true when the description starts with "Error:"', () => {
      const description = new Description('Error: some error message');
      expect(description.isErrorMessage()).toBe(true);
    });

    it('should return false when the description does not start with "Error:"', () => {
      const description = new Description('This is a normal description');
      expect(description.isErrorMessage()).toBe(false);
    });
  });

  describe('normalize', () => {
    it('should remove all line breaks and trim the description', () => {
      const description = new Description('   \n This is a description. \n   ');
      const normalized = description.normalize();

      expect(normalized).toEqual('This is a description.');
    });
  });

  describe('isValid', () => {
    it('should return false when the description is empty', () => {
      const description = new Description('');
      expect(description.isValid()).toBe(false);
    });

    it('should return false when the description starts with "Error:"', () => {
      const description = new Description('Error: some error message');
      expect(description.isValid()).toBe(false);
    });

    it('should return true when the description does not start with "Error:"', () => {
      const description = new Description('This is a normal description');
      expect(description.isValid()).toBe(true);
    });
  });
});
