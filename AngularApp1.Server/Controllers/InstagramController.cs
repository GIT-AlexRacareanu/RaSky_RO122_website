using Microsoft.AspNetCore.Mvc;
using Microsoft.Playwright;
using HtmlAgilityPack;
using AngularApp1.Server.Models;
using Microsoft.EntityFrameworkCore.Migrations;

[Route("api/[controller]")]
[ApiController]
public class InstagramController : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<string>>> GetPosts()
    {
        using var playwright = await Playwright.CreateAsync();
        await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions
        {
            Headless = true
        });
        var context = await browser.NewContextAsync(new()
        {
            StorageStatePath = "Auth/auth.json"
        });

        var page = await context.NewPageAsync();
        await page.GotoAsync("https://www.instagram.com/raskyrobotics/");
        for (int i = 0; i < 2; i++)
        {
            await page.Mouse.WheelAsync(0, 1500);
            await Task.Delay(3000);
        }

        var html = await page.ContentAsync();
        var doc = new HtmlDocument();
        doc.LoadHtml(html);

        var postNodes = doc.DocumentNode
            .SelectNodes("//img")
            .Where(img => img.GetAttributeValue("class", "") == "x5yr21d xu96u03 x10l6tqk x13vifvy x87ps6o xh8yej3")
            .Select(img => img.OuterHtml)
            .ToList();


        if (postNodes != null)
            return postNodes;
        return new List<string>();
    }
}
