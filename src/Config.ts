import { AzureClientProps, AzureFunctionTokenProvider, LOCAL_MODE_TENANT_ID } from "@fluidframework/azure-client";
import { SharedMap } from "fluid-framework";
import { getRandomName } from "@fluidframework/server-services-client";
import { v4 as uuid } from 'uuid';
import { InsecureTokenProvider } from "@fluidframework/test-client-utils";

export const useAzure = process.env.REACT_APP_FLUID_CLIENT === "azure";
const fluidrelay_accessKey = process.env.REACT_APP_FLUIDRELAY_ACCESSKEY ? process.env.REACT_APP_FLUIDRELAY_ACCESSKEY: "";
const userId = uuid();

export const containerSchema = {
    initialObjects: {
        map: SharedMap,
    },
}

export const userConfig = {
    id: uuid(),
    name: getRandomName(),
};



export const connectionConfig = { 
    connection: {
        tenantId: "dc24fade-1619-423f-86bc-e693b9b32462",
        tokenProvider: new InsecureTokenProvider(fluidrelay_accessKey, { id: userId }),
        orderer: "https://alfred.westeurope.fluidrelay.azure.com",
        storage: "https://historian.westeurope.fluidrelay.azure.com"
    }
}