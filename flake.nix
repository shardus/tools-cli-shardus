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
        npmDepsHash = "sha256-IumdK64YlQU7nA5DFj0g0oPdXoJxblS8+VyHKHh+WHs=";
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
