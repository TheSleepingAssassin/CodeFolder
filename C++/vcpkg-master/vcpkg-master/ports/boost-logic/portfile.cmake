# Automatically generated by boost-vcpkg-helpers/generate-ports.ps1

vcpkg_from_github(
    OUT_SOURCE_PATH SOURCE_PATH
    REPO boostorg/logic
    REF boost-1.74.0
    SHA512 bc2077785ffef6eed64d3ac49cc9d6958907b5270b4d72f7ee499bf818a87bb72985f6606946415c527283a8a29f506dfc930afb6ae3561450f873473f8ae413
    HEAD_REF master
)

include(${CURRENT_INSTALLED_DIR}/share/boost-vcpkg-helpers/boost-modular-headers.cmake)
boost_modular_headers(SOURCE_PATH ${SOURCE_PATH})