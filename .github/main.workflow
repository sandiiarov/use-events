workflow "TSC, Test, Build and Publish" {
  on = "push"
  resolves = ["TSC", "Publish docs", "Publish package"]
}

action "Install" {
  uses = "actions/npm@master"
  runs = "yarn"
  args = "install"
}

action "TSC" {
  needs = "Install"
  uses = "actions/npm@master"
  runs = "yarn"
  args = "tsc"
}

action "Master" {
  needs = "TSC"
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Build docs" {
  needs = "Master"
  uses = "actions/npm@master"
  runs = "yarn"
  args = "docz:build"
}

action "Publish docs" {
  needs = "Build docs"
  uses = "maxheld83/ghpages@v0.1.1"
  env = {
    BUILD_DIR = ".docz/dist"
  }
  secrets = ["GITHUB_TOKEN"]
}

action "Build package" {
  needs = "Master"
  uses = "actions/npm@master"
  runs = "yarn"
  args = "run pack build"
}

action "Publish package" {
  needs = "Build package"
  uses = "zackify/npm@354aa07c3dc1f17f66afa69d1ddaac4620dc0668"
  args = "cd pkg && npm publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
