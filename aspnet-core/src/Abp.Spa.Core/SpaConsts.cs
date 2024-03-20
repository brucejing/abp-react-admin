using Abp.Spa.Debugging;

namespace Abp.Spa
{
    public class SpaConsts
    {
        public const string LocalizationSourceName = "Spa";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "064878eec9b1457bb61c0e6fdee89abf";
    }
}
