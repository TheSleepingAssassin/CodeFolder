vcpkg_from_sourceforge(
    OUT_SOURCE_PATH SOURCE_PATH
    REPO wtl/WTL%2010
    REF WTL%2010.0.10077
    FILENAME "WTL10_1077..zip"
    NO_REMOVE_ONE_LEVEL
    SHA512 5a49283196caf5b2ad8a3fb3cfa5d09cd555d59d4d5871408bf6a5b850cf4546cc6ece4e0bf79d152a4d2589fae3749f0f3e73ab6a3a7bc0cb373efa1474b98b
)

file(INSTALL ${SOURCE_PATH}/Include/ DESTINATION ${CURRENT_PACKAGES_DIR}/include/${PORT} FILES_MATCHING PATTERN "*.h")
file(COPY ${SOURCE_PATH}/Samples DESTINATION ${CURRENT_PACKAGES_DIR}/share/${PORT})
file(COPY ${SOURCE_PATH}/AppWizard DESTINATION ${CURRENT_PACKAGES_DIR}/share/${PORT})

file(INSTALL ${SOURCE_PATH}/MS-PL.txt DESTINATION ${CURRENT_PACKAGES_DIR}/share/${PORT} RENAME copyright)