{ pkgs ? import <nixpkgs> {} }:


let

	# used by nix npm to install pnpm
	NPM_CONFIG_PREFIX = toString ./.npm;

in pkgs.mkShell {
	buildInputs = [
		pkgs.findutils
		pkgs.gnumake
		pkgs.nodejs-16_x
	];

	inherit NPM_CONFIG_PREFIX;

	shellHook = ''
	export PATH="${NPM_CONFIG_PREFIX}/bin:$PATH";
	./scripts/setup-pnpm;
	'';
}
