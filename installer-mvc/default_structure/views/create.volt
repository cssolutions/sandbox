{{ content() }}

{% set profile = auth.getIdentity()['profile'] %}

<h2>Ház létrehozása</h2>

<br />
<div align="right">
    {{ link_to(resource, "<i class='icon-plus-sign'></i> Vissza a listához", "class": "btn btn-primary create-btn ajax-btn") }}
</div>
<br />

{{ form('class': 'ajax' ,'method' : 'POST' , 'action' :  url(resource) ) }}


    <ul class="list-unstyled">

        {{ form.renderDecorated('name') }}
        {{ form.renderDecorated('hrsz') }}


        <li class="csrf col-xs-12 col-sm-12">
            <input type="hidden" name="{{ security.getTokenKey() }}" value="{{ security.getToken() }}"/>
        </li>
        <li class="submit form-control-wrapper">
            <button class="btn btn-primary">
                <i class="mdi-navigation-check"></i>Létrehoz
            </button>
        </li>

    </ul>

</form>
