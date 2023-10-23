using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Ativ.API.Models;

namespace Ativ.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtivController : ControllerBase
    {
        public IEnumerable<Atividade> Atividades = new List<Atividade>(){
                new Atividade(1),
                new Atividade(2),
                new Atividade(3)
        };
        [HttpGet]
        public IEnumerable <Atividade> get()
        {
            return Atividades;
        }

        [HttpGet("{id}")]
        public string get(int id)
        {
            return $"My first method get with parameters {id}";
        }

        [HttpPost]
        public Atividade post(Atividade atividade)
        {
            atividade.id = 1;
            return atividade;
        }

        [HttpPut("{id}")]
        public string put(int id)
        {
            return "My first method PUT with ";
        }

        [HttpDelete("{id}")]
        public string delete(int id)
        {
            return $"My first method delete with {id}";
        }
    }
}
