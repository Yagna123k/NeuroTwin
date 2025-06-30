import { requireSession } from '@clerk/clerk-sdk-node';

const authenticate = requireSession();
export default authenticate;
