from urllib.request import urlopen
import json
import pandas as pd

import plotly.express as px

class Heatmap:

    def __init__(self):
        
        self.pvi_endpoint = "https://raw.githubusercontent.com/COVID19PVI/data/master/Model11.2/Model_11.2_20210129_results.csv"

        self.us_state_abbrev_map = {
            'Alabama': 'AL',
            'Alaska': 'AK',
            'American Samoa': 'AS',
            'Arizona': 'AZ',
            'Arkansas': 'AR',
            'California': 'CA',
            'Colorado': 'CO',
            'Connecticut': 'CT',
            'Delaware': 'DE',
            'District Of Columbia': 'DC',
            'Florida': 'FL',
            'Georgia': 'GA',
            'Guam': 'GU',
            'Hawaii': 'HI',
            'Idaho': 'ID',
            'Illinois': 'IL',
            'Indiana': 'IN',
            'Iowa': 'IA',
            'Kansas': 'KS',
            'Kentucky': 'KY',
            'Louisiana': 'LA',
            'Maine': 'ME',
            'Maryland': 'MD',
            'Massachusetts': 'MA',
            'Michigan': 'MI',
            'Minnesota': 'MN',
            'Mississippi': 'MS',
            'Missouri': 'MO',
            'Montana': 'MT',
            'Nebraska': 'NE',
            'Nevada': 'NV',
            'New Hampshire': 'NH',
            'New Jersey': 'NJ',
            'New Mexico': 'NM',
            'New York': 'NY',
            'North Carolina': 'NC',
            'North Dakota': 'ND',
            'Northern Mariana Islands':'MP',
            'Ohio': 'OH',
            'Oklahoma': 'OK',
            'Oregon': 'OR',
            'Pennsylvania': 'PA',
            'Puerto Rico': 'PR',
            'Rhode Island': 'RI',
            'South Carolina': 'SC',
            'South Dakota': 'SD',
            'Tennessee': 'TN',
            'Texas': 'TX',
            'Utah': 'UT',
            'Vermont': 'VT',
            'Virgin Islands': 'VI',
            'Virginia': 'VA',
            'Washington': 'WA',
            'West Virginia': 'WV',
            'Wisconsin': 'WI',
            'Wyoming': 'WY'
        }


    # Get PVI data from NIEHS, parse data into format ["PVI", "State Initials"].
    def get_pvi_df(self):

        # Returns state initial from county 
        def parse_county(county):
            state = ""

            for c in county:
                if c == ",":
                    break
                state += c

            return self.us_state_abbrev_map[state]

        # Get dataframe
        df = pd.read_csv(self.pvi_endpoint)

        # Format data
        df = df[["Name", "ToxPi Score"]]
        df["Name"] = df["Name"].apply(parse_county)
        df.columns = ["State", "PVI"]

        # Aggregate data by state
        df = df.groupby("State").mean().reset_index()

        return df


    def get_heatmap(self):
        df = self.get_pvi_df()

        fig = px.choropleth(df, locations=df["State"].tolist(), locationmode="USA-states", color=df["PVI"].tolist(), scope="usa",
                labels={'PVI':'Pandemic Vulnerability Index'},
                range_color=(0, 1),
                title="Pandemic Vulnerability Index"
        )

        fig.show()

        # fig = px.choropleth(df, locationmode='USA-states', 
        #                            color_continuous_scale="Viridis",
        #                            range_color=(0, 12),
        #                            featureidkey="PVI",
        #                            scope="usa",
        #                            labels={'PVI':'Pandemic Vulnerability Index'}
        #                           )
        # fig.update_layout(margin={"r":0,"t":0,"l":0,"b":0})
        # fig.show()


if __name__ == "__main__":
    hm = Heatmap()

    # print(hm.get_pvi_df().sort_values("PVI"))
    hm.get_heatmap()

