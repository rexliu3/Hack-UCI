from urllib.request import urlopen
import json
import sys
from datetime import datetime, timedelta

import pandas as pd

import plotly.express as px

class Heatmap:

    def __init__(self):
        
        self.color_scheme = "Sunsetdark"
        self.pvi_endpoint_prefix = "https://raw.githubusercontent.com/COVID19PVI/data/master/Model11.2/Model_11.2_"
        self.pvi_endpoint_suffix = "_results.csv"

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

    def get_batch_pvi(self):
        res = pd.DataFrame(columns=["State", "PVI", "Day"])

        start_date = datetime(2020, 2, 29)
        end_date = datetime(2021, 1, 29)

        i = 1
        while start_date < end_date:
            cur_df = self.get_pvi_df(start_date.strftime("%Y%m%d"))
            cur_df["Day"] = i

            res = pd.concat([res, cur_df], ignore_index=False)

            if i % 10 == 0:
                print(start_date)

            start_date += timedelta(1)
            i += 1

        return res


    # Shows heatmap with latest available data.
    def get_heatmap(self):
        df = self.get_batch_pvi()

        fig = px.choropleth(df, locations=df["State"].tolist(), locationmode="USA-states", 
                color_continuous_scale=self.color_scheme,
                animation_frame=df["Day"].tolist(),
                color=df["PVI"].tolist(), 
                scope="usa",
                range_color=(0.2, 0.6),
                title="Pandemic Vulnerability Index - {}".format(date)
        )

        fig.update_layout(transition = {'duration': 10})
        fig.show()


    # Get PVI data from NIEHS, parse data into format ["PVI", "State Initials"].
    # Date is string formatted as "YYYYMMDD".
    def get_pvi_df(self, date):

        # Returns state initial from county 
        def parse_county(county):
            state = ""

            for c in county:
                if c == ",":
                    break
                state += c

            return self.us_state_abbrev_map[state]

        # Get dataframe
        df = pd.read_csv(self.pvi_endpoint_prefix + date + self.pvi_endpoint_suffix)

        # Format data
        df = df[["Name", "ToxPi Score"]]
        df["Name"] = df["Name"].apply(parse_county)
        df.columns = ["State", "PVI"]

        # Aggregate data by state
        df = df.groupby("State").mean().reset_index()

        return df


if __name__ == "__main__":
    if len(sys.argv) > 2:
        print("ERROR: Too many arguments! Format: $ python3 heatmap.py <YYYYMMDD>")
    else:
        hm = Heatmap()

        date = "20210129"
        if len(sys.argv) > 1:
            date = sys.argv[1]

        hm.get_heatmap()
