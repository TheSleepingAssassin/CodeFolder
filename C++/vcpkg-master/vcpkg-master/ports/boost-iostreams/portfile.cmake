# Automatically generated by boost-vcpkg-helpers/generate-ports.ps1

vcpkg_from_github(
    OUT_SOURCE_PATH SOURCE_PATH
    REPO boostorg/iostreams
    REF boost-1.74.0
    SHA512 3d1899ed258dff8cc20c7b725159f3fd40550f8e47b450dc6009a49499e209c07ee71598803eff1f7daca30629a288af4b286f629dfbb72677dc5d23eb2c6efb
    HEAD_REF master
    PATCHES
        0001-Fix-build-on-windows-with-libc-106.patch
        Removeseekpos.patch
)

include(${CURRENT_INSTALLED_DIR}/share/boost-build/boost-modular-build.cmake)
boost_modular_build(SOURCE_PATH ${SOURCE_PATH})
include(${CURRENT_INSTALLED_DIR}/share/boost-vcpkg-helpers/boost-modular-headers.cmake)
boost_modular_headers(SOURCE_PATH ${SOURCE_PATH})