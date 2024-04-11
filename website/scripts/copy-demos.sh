demos_dir=./src/demos
# demos_dir=./demos-test
# PKGS=(button input material-icons spinner toggle-theme)
PKGS=(button material-icons spinner toggle-theme)
pkgs_count="${#PKGS[@]}"

for pkg in "${PKGS[@]}"; do
  pkg_dir="../packages/${pkg}"
  pkg_name=$(jq '.name' "${pkg_dir}"/package.json)
  pkg_demo_target="${demos_dir}/${pkg}"

  echo "Copying demos for ${pkg_name}..."

  cp --recursive --update --no-target-directory \
    "${pkg_dir}"/src/demos "${pkg_demo_target}"

  find "${pkg_demo_target}" -type f -print0 |
    xargs -0 sed -i "s/@lib\/main/@hrc\/${pkg}/"

  echo "Copied demos for ${pkg_name}"

  if [ ! "${pkg}" == "${PKGS[$((pkgs_count - 1))]}" ]; then
    echo
  fi
done
