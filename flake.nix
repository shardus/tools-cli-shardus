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

      packageLock = builtins.fromJSON (builtins.readFile ./package-lock.json);
    in {
      packages.default = pkgs.buildNpmPackage {
        name = packageLock.name;
        version = packageLock.version;
        src = ./.;
        npmDepsHash = "sha256-6/oZwUMKuJBjCl1Fqta0JJ3TnANE99x54YD6kewJpMQ=";
        makeCacheWritable = true;
        dontNpmBuild = true;
      };

      apps.default = utils.lib.mkApp {
        drv = self.packages.${system}.default;
      };

      devShells.default = pkgs.mkShell {
        packages = [pkgs.prefetch-npm-deps];
      };
    });
}
