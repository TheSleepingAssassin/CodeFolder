# Automatically generated by boost-vcpkg-helpers/generate-ports.ps1

vcpkg_from_github(
    OUT_SOURCE_PATH SOURCE_PATH
    REPO boostorg/preprocessor
    REF boost-1.74.0
    SHA512 6e5acbce64d4c290a8b2c2f0c95bda16f985039a63e542074fe0549a9abe0a890f56433c69ddc276a833ed64c137521eb4843585c6568668b8e0dfddc9ab3c1f
    HEAD_REF master
)

include(${CURRENT_INSTALLED_DIR}/share/boost-vcpkg-helpers/boost-modular-headers.cmake)
boost_modular_headers(SOURCE_PATH ${SOURCE_PATH})