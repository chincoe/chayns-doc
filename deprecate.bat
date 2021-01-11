FOR /F "tokens=* USEBACKQ" %%F IN (`npm view chayns-doc version`) DO (
SET pkgversion=%%F
)
npm deprecate chayns-doc@%pkgversion% "Version %pkgversion% is outdated, update to @latest"