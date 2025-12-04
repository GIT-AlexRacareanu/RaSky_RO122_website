import { gql } from "apollo-angular";


export const GET_TEAM = (season: number) => gql(`
  query GetTeam($season: Int!){
  teamByNumber(number: 19109) {
    number
    name
    schoolName
    rookieYear
    quickStats(season: $season) {
      tot {
        value
        rank
      }
      dc {
        value
        rank
      }
      auto {
        value
        rank
      }
      eg {
        value
        rank
      }
    }
    location {
      city
      country
      state
    }
    events(season: $season) {
      stats{
        ... on TeamEventStats${season}
        {
          wins
          ties
          losses
        }
      }
      event {
        address
        name
        location {
          city
          country
          state
        }
      }
      awards {
        type
        placement
      }
      matches {
        match {
          matchNum
          scores{
            ... on MatchScores${season}  
              {
                blue 
                { 
                  totalPoints 
                }
                red 
                { 
                  totalPoints 
                } 
              }
            
          }
          teams {
            team {
              name
              number
            }
          }
        }
      }
    }
  }
}

`);
