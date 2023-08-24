import { useRouter } from "next/router"
import Seo from "@/components/seo";

export default function Detail({params, res}) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title}/>
      <h4>{title || "Loading..."}</h4>
      <div className="overview">
        {res.overview}
      </div>
      <div className="genres">
        {res.genres.map(({id, name}) => 
          <div className="genre" id={id}>
            {name}
          </div>
        )}
      </div>
      <style jsx>{`
        h4 {
          text-align: center;
          font-size: 24px;
        }
        .overview {
          text-shadow: gray 5px 5px 5px;
        }
        .genres {
          width: inherit;
          height: 30px;
          margin: 20px 0px;
          display: flex;
          justify-content: left;
          align-items: center;
        }
        .genre {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
          background-color: beige;
          color: black;
          border-radius: 10px;
          margin: 5px;
        }
      `}</style>
    </div>
  )
}

// export async function getStaticProps({params: {params}}) {
//   const res = await (await fetch(`http://localhost:3000/api/movies/${params[1]}`)).json();
//   return {
//     props: {
//       params,
//       res
//     }
//   }
// }

// export function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: 'blocking'
//   }
// }


export async function getServerSideProps({params: {params}}) {
  const res = await (await fetch(`http://localhost:3000/api/movies/${params[1]}`)).json();
  return {
    props: {
      params,
      res
    }
  }
}