using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DirectiveDemo.Startup))]
namespace DirectiveDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
