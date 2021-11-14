food = pd.read_csv('food_data.csv')

titles = find_recipe(['quick & easy','vegetarian','low cal','low carb'])
titles = titles.tolist()


def find_recipe(categories):
    newfood = food
    for i in categories:
        newfood = newfood.loc[newfood[i] > 0]
    return (newfood['title'])


titles = find_recipe(['quick & easy','vegetarian','low cal','low carb'])
titles = titles.tolist()
print("titles")