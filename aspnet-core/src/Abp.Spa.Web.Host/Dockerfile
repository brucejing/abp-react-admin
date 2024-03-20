FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["src/Abp.Spa.Web.Host/Abp.Spa.Web.Host.csproj", "src/Abp.Spa.Web.Host/"]
COPY ["src/Abp.Spa.Web.Core/Abp.Spa.Web.Core.csproj", "src/Abp.Spa.Web.Core/"]
COPY ["src/Abp.Spa.Application/Abp.Spa.Application.csproj", "src/Abp.Spa.Application/"]
COPY ["src/Abp.Spa.Core/Abp.Spa.Core.csproj", "src/Abp.Spa.Core/"]
COPY ["src/Abp.Spa.EntityFrameworkCore/Abp.Spa.EntityFrameworkCore.csproj", "src/Abp.Spa.EntityFrameworkCore/"]
WORKDIR "/src/src/Abp.Spa.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/Abp.Spa.Web.Host", "src/Abp.Spa.Web.Host"]
COPY ["src/Abp.Spa.Web.Core", "src/Abp.Spa.Web.Core"]
COPY ["src/Abp.Spa.Application", "src/Abp.Spa.Application"]
COPY ["src/Abp.Spa.Core", "src/Abp.Spa.Core"]
COPY ["src/Abp.Spa.EntityFrameworkCore", "src/Abp.Spa.EntityFrameworkCore"]
WORKDIR "/src/src/Abp.Spa.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:7.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "Abp.Spa.Web.Host.dll"]
