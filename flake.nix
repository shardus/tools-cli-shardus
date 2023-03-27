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
        version = "4.2.5";
        src = ./.;
        npmDepsHash = "sha256-9V0s6M/7Ha/zTHHeuN9LHG1c3R9hd1Q8oJra2WrbdJA=";
        makeCacheWritable = true;
        dontNpmBuild = true;
      };

      apps.default = utils.lib.mkApp {
        drv = self.packages.${system}.default;
      };
    });
}
