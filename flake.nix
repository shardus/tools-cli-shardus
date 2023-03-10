{
  description = "shardus-cli";

  inputs = {
    utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    utils,
  }:
    utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {
        inherit system;
      };
    in {
      packages.default = pkgs.buildNpmPackage {
        name = "shardus";
        version = "4.2.4";
        src = ./.;
        npmDepsHash = "sha256-MjyfSzFzr9JVznsd0o8mXiBO2DTjycj86bFDrj2Q/a0=";
        makeCacheWritable = true;
        dontNpmBuild = true;
      };

      apps.default = utils.lib.mkApp {
        drv = self.packages.${system}.default;
      };
    });
}
