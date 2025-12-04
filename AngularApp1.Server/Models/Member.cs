using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularApp1.Server.Models
{
    [Table("member")]
    public class Member
    {
        [Key]
        public int Id { get; set; }
        public int? Enrollment_Time { get; set; }
        public string? First_Name { get; set; }
        public string? Last_Name { get; set; }
        public string? Description { get; set; }
        public string? Photo_Url { get; set; }
        public List<Role> Roles { get; set; } = [];
    }
}
