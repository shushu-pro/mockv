import { loadCnAreaData } from './mocks/address';

interface LoadOption {
  cnAreaData: Parameters<typeof loadCnAreaData>[0];
}

function load({ cnAreaData }: LoadOption) {
  if (cnAreaData) {
    loadCnAreaData(cnAreaData);
  }
}

export { load };
