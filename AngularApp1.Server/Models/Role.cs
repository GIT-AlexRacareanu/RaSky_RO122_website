using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace AngularApp1.Server.Models
{
    [Table("role")]
    public class Role
    {
        public int Id { get; set; }
        public string? Name { get; set; }

        [JsonIgnore]
        public List<Member> Members { get; set; } = new();
    }
}
