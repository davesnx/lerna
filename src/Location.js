import path from "path";

export default class Location {
  constructor(path) {
    this._path = path;
  }

  resolvePath() {
    return path.join(this._path, "node_modules");
  }

  get path() {
    return this._path
  }

  get modulesPath() {
    return path.join(this._path, "node_modules");
  }
}
