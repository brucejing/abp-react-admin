using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace Abp.Spa.EntityFrameworkCore
{
    public static class SpaDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<SpaDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<SpaDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
