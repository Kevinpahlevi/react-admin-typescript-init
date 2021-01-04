import getListRequest from "./Request/getList";
import getOneRequest from "./Request/getOne";
import getManyRequest from "./Request/getMany";
import getManyReferenceRequest from "./Request/getManyReference";
import createRequest from "./Request/create";
import updateRequest from "./Request/update";
import updateManyRequest from "./Request/updateMany";
import deleteReqRequest from "./Request/delete";
import deleteManyRequest from "./Request/deleteMany";
import { DataProvider } from "react-admin";

const dataProvider: DataProvider = {
  getList: async (resource: any, params: any) => {
    const data = await getListRequest(resource, params);
    return Promise.resolve(data);
  },
  getOne: async (resource: string, params: any) => {
    const data = await getOneRequest(resource, params);
    return Promise.resolve(data);
  },
  getMany: async (resource: string, params: any) => {
    const data = await getManyRequest(resource, params);
    return Promise.resolve(data);
  },
  getManyReference: async (resource: string, params: any) => {
    const data = await getManyReferenceRequest(resource, params);
    return Promise.resolve(data);
  },
  create: async (resource: string, params: any) => {
    const data = await createRequest(resource, params);
    return Promise.resolve(data);
  },
  update: async (resource: string, params: any) => {
    const data = await updateRequest(resource, params);
    return Promise.resolve(data);
  },
  updateMany: async (resource: string, params: any) => {
    const data = await updateManyRequest(resource, params);
    return Promise.resolve(data);
  },
  delete: async (resource: string, params: any) => {
    const data = await deleteReqRequest(resource, params);
    return Promise.resolve(data);
  },
  deleteMany: async (resource: string, params: any) => {
    const data = await deleteManyRequest(resource, params);
    return Promise.resolve(data);
  },
} as DataProvider;

export default dataProvider;
