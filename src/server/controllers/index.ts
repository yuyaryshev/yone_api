import { Env } from "../../index";
import { Express } from "express";
import { publishOneApis } from "./oneApi";

export function publishApis(env: Env, app: Express) {
    publishOneApis(env, app);
}
