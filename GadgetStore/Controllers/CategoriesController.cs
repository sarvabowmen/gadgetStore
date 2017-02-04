using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataAccess;
using Domain;
using System.Threading.Tasks;
using System.Web.Http.Description;

namespace GadgetStore.Controllers
{
    public class CategoriesController : ApiController
    {
        private StoreContext dbStoreContext = new StoreContext();

        // GET api/Categories
        public IQueryable<Category> GetCategories()
        {
            return dbStoreContext.Categories;
        }

        // GET api/Categories/5
        [ResponseType(typeof(Category))]
        public async Task<IHttpActionResult> GetCategory(int id)
        {
            var category = await dbStoreContext.Categories.FindAsync(id);

            if (category == null)
                return NotFound();
            return Ok(category);
        }

        // PUT: api/Categories/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCategory(int id, Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != category.CategoryID)
            {
                return BadRequest();
            }

            dbStoreContext.Entry(category).State = System.Data.Entity.EntityState.Modified;

            try
            {
                await dbStoreContext.SaveChangesAsync();
            }
            catch (System.Data.Entity.Infrastructure.DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Categories
        [ResponseType(typeof(Category))]
        public async Task<IHttpActionResult> PostCategory(Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            dbStoreContext.Categories.Add(category);
            await dbStoreContext.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = category.CategoryID }, category);
        }

        // DELETE: api/Categories/5
        [ResponseType(typeof(Category))]
        public async Task<IHttpActionResult> DeleteCategory(int id)
        {
            Category category = await dbStoreContext.Categories.FindAsync(id);
            if (category == null)
            {
                return NotFound();
            }

            dbStoreContext.Categories.Remove(category);
            await dbStoreContext.SaveChangesAsync();

            return Ok(category);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                dbStoreContext.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CategoryExists(int id)
        {
            return dbStoreContext.Categories.Count(g => g.CategoryID == id) > 0;
        }

    }
}