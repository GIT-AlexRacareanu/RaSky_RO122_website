using AngularApp1.Server.Data;
using AngularApp1.Server.Models;

namespace AngularApp1.Server.Services
{
    public class MemberService
    {
        private readonly AppDbContext _context;

        public MemberService(AppDbContext context)
        {
            _context = context;
        }

        public List<Member> GetMembers()
        {
            return _context.Members.ToList();
        }
    }
}
