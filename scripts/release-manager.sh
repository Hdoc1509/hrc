# TODO: use same release manager logic as:
# https://github.com/Hdoc1509/hygen.nvim/blob/master/scripts/release-manager.sh

# NOTE: to check breaking changes on major 0
# where: 0.9.1 is previous version and 1.0.0 is current version
# git log "@hrc/input@0.9.1..@hrc/input@1.0.0" --oneline | grep --count '(input)\!'

# TODO: to check breaking changes from CHANGELOG.md
# sed --quiet '5p' "packages/input/CHANGELOG.md" | grep --count "Major"
